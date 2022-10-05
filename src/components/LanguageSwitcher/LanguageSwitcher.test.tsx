import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { LangSwitcherProvider } from 'contexts/LangSwitcherContext';
import { messages } from 'lang/languages';

import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher component', () => {
  describe('When the component is instantiated', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <LanguageSwitcher />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>
      );
    });

    test('renders language icon', () => {
      expect(screen.getByAltText(/language icon/i)).toBeInTheDocument();
    });

    test('renders the correct language', () => {
      expect(
        screen.getByRole('button', { name: /language icon/i })
      ).toHaveTextContent(/english/i);
    });

    test('menu not visible', () => {
      expect(screen.getByRole('list')).not.toHaveClass(
        'lang-switch__list--visible'
      );
    });
  });

  describe('when buttons are clicked', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LangSwitcherProvider>
            <IntlProvider locale={'en-US'} messages={messages['en']}>
              <LanguageSwitcher />
            </IntlProvider>
          </LangSwitcherProvider>
        </BrowserRouter>
      );
    });

    test('menu appears', () => {
      userEvent.click(screen.getByRole('button', { name: /language icon/i }));
      expect(screen.getByRole('list')).toHaveClass(
        'lang-switch__list--visible'
      );
    });

    test('menu is hidden when button clicked again', () => {
      userEvent.click(screen.getByAltText(/language icon/i));
      userEvent.click(screen.getByAltText(/language icon/i));
      expect(screen.getByRole('list')).not.toHaveClass(
        'lang-switch__list--visible'
      );
    });

    test('language changes on dropdown selection', () => {
      userEvent.click(screen.getByRole('button', { name: /language icon/i }));
      userEvent.click(screen.getByRole('button', { name: /español/i }));
      expect(
        screen.getByRole('button', { name: /language icon/i })
      ).toHaveTextContent(/español/i);
    });
  });
});

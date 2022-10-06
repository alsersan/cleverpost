import { User } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { messages } from 'lang/languages';

import { UserInfo } from './UserInfo';

const mockedUser = { name: 'John Doe', picture: '' } as User;
const mockedLogout = jest.fn();

describe('UserInfo component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <IntlProvider locale={'en-US'} messages={messages['en']}>
          <UserInfo user={mockedUser} handleLogout={mockedLogout} />
        </IntlProvider>
      </BrowserRouter>
    );
  });
  describe('When the component is instantiated', () => {
    test('renders username', () => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    test('dropdown is not visible', () => {
      expect(screen.queryByText(/log out/i)).toBeInTheDocument();
    });
  });

  describe('When logout is clicked', () => {
    test('logout function is called', () => {
      userEvent.click(screen.getByRole('button', { name: /log out/i }));
      expect(mockedLogout).toHaveBeenCalledTimes(1);
    });
  });
});

export const EMAIL_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
export const checkFormatEmail = (eml) => {
  const rg = new RegExp(EMAIL_REGEX).test(eml);
  return rg;
};

export const emailErrorsMessage = [
  {
    type: 'manual',
    name: 'INVALIDEMAIL',
    message: 'This email address is invalid',
  },
  {
    type: 'manual',
    name: 'NOEMAIL',
    message: 'Please your enter email',
  },
];

export const passwordErrorsMessage = [
  {
    type: 'manual',
    name: 'NOPASSWORD',
    message: 'Please enter password',
  },
  {
    type: 'manual',
    name: 'MINPASSWORD',
    message: 'Password has minlength 8 character',
  },
];

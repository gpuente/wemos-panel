import Paper from '@material-ui/core/Paper';
import React from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

const Login: React.SFC<WithNamespaces> = ({ t }) => (
  <Paper>
    {t('pages.login.text')}
  </Paper>
);

export default withNamespaces('translation')(Login);

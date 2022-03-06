import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, token }) {
  return token ? children : <Navigate to="/signin" replace/>;
}

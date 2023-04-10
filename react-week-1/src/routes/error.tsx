import React from 'react';
import '../styles/error.css';
function Error() {
  return (
    <main className="main">
      <div data-testid="errorDiv" className="error_page">
        404. Page not found
      </div>
    </main>
  );
}
export default Error;

import React from 'react';
class Error extends React.Component {
  render() {
    return (
      <main className="main">
        <div data-testid="errorDiv" className="error_page">
          404. Page not found
        </div>
      </main>
    );
  }
}
export default Error;

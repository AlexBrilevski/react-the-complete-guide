import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
  test('Renders "Hello World!" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldText = screen.getByText('Hello World!');
    expect(helloWorldText).toBeInTheDocument();
  });

  test('Renders the "good to see you" text if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    // ... nothing

    // Assert
    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('Renders the "Check out this new text!" text if the button was clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Check out this new text!');
    expect(outputElement).toBeInTheDocument();
  });

  test('Does not render the "good to see you" text if the button was clicked', () => {
    // Arrange
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import { Faq } from './Faq';
import '@testing-library/jest-dom';

describe('Faq Component', () => {
  test('renders correctly', () => {
    render(<Faq />);
    const faqSection = screen.getByRole('region', { name: 'faq'});
    expect(faqSection).toBeInTheDocument();

    const questions = screen.getAllByRole('heading', { level: 3 });
    expect(questions).toHaveLength(2);

    const firstQuestion = screen.getByText(/long answer to the first question/i);
    expect(firstQuestion).toBeInTheDocument();
    expect(firstQuestion).toHaveClass(/^_contentActive_[^_\s]+$/);

    const secondQuestionContent = screen.getByText(/long answer to the second question/i);
    expect(secondQuestionContent).toBeInTheDocument();
    expect(secondQuestionContent).not.toHaveClass(/^_contentActive_[^_\s]+$/);
  });

  test('question content visibility on click', () => {
    render(<Faq />);

    const secondQuestion = screen.getByText('Question 2');
    fireEvent.click(secondQuestion);

    const secondQuestionContent = screen.getByText(/long answer to the second question/i);
    expect(secondQuestionContent).toHaveClass(/^_contentActive_[^_\s]+$/);

    fireEvent.click(secondQuestion);
    expect(secondQuestionContent).not.toHaveClass(/^_contentActive_[^_\s]+$/);
  });

  test('renders IconButton and IconClose with correct classes', () => {
    render(<Faq />);

    const firstQuestionButton = screen.getAllByRole('button', { name: /открыть или закрыть описание/i})[0];
    expect(firstQuestionButton).toBeInTheDocument();

    const icon = firstQuestionButton.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(/^_svgActive_[^_\s]+$/);
    
  });
});

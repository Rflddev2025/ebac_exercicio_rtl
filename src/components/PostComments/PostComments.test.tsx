import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '.';
import '@testing-library/jest-dom';

describe('PostComments', () => {
it('deve adicionar dois comentários e exibi-los corretamente', () => {
    render(<PostComments />);

    const textarea = screen.getByTestId('comment-textarea');
    const button = screen.getByTestId('submit-button');


    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);


    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    const commentItems = screen.getAllByTestId('comment-item');
    expect(commentItems).toHaveLength(2);
    expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
    expect(commentItems[1]).toHaveTextContent('Segundo comentário');
});
});

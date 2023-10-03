import { describe, expect, test } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App.jsx';
import Form from './components/form.jsx';
import Posts from './components/posts.jsx';
import ShowPost from './components/showPost.jsx';

test("say hello to Techtonica", () => {
    const { getByText } = render(<App />);
    expect(getByText("Diaries Online")).toBeDefined();
});

test("The form renders", () => {
    const { getByText } = render(<Form />);
    expect(getByText("Add a new post")).toBeDefined();
});

test("The list of posts renders", async () => {
    const { getByTestId } = render(<Posts />);
    await waitFor(() => getByTestId('post-list'));
});

test("The full post renders", () => {
    const { getByRole } = render(<ShowPost />);
    const imgElement = getByRole('img');
    expect(imgElement).toBeInTheDocument();
});
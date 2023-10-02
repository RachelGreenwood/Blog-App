import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';

test("say hello to Techtonica", () => {
    const { getByText } = render(<App />);
    expect(getByText("Diaries Online")).toBeDefined();

});
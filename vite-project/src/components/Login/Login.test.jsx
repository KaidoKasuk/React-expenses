import { afterEach, describe, it, expect, vi } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Login from "./Login";

afterEach(() => cleanup());

describe("Login", () => {
  it("renders email and password inputs and a disabled login button initially", () => {
    render(<Login onLogin={vi.fn()} />);

    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText(/password/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /login/i }).disabled).toBe(true);
  });

  it("enables the login button when a valid email and password are entered", async () => {
    render(<Login onLogin={vi.fn()} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    await waitFor(
      () => {
        expect(screen.getByRole("button", { name: /login/i }).disabled).toBe(
          false,
        );
      },
      { timeout: 1000 },
    );
  });

  it("calls onLogin with the entered email and password when the form is submitted", async () => {
    const onLoginMock = vi.fn();
    render(<Login onLogin={onLoginMock} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    await waitFor(
      () => {
        expect(screen.getByRole("button", { name: /login/i }).disabled).toBe(
          false,
        );
      },
      { timeout: 1000 },
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(onLoginMock).toHaveBeenCalledWith("user@example.com", "password123");
  });
});

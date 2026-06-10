import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";

describe("App theme toggle", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    localStorage.setItem(
      "isLoggedUser",
      JSON.stringify({ username: "test", isLogged: true }),
    );
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ expenses: [] }),
      }),
    );
    document.body.className = "";
  });

  afterEach(() => {
    cleanup();
    localStorage.removeItem("isLoggedUser");
    document.body.className = "";
    global.fetch = originalFetch;
  });

  it("toggles the dark theme when the Change theme link is clicked", async () => {
    render(<App />);

    const changeThemeLink = await screen.findByText(/change theme/i);

    expect(document.body.classList.contains("dark")).toBe(false);

    fireEvent.click(changeThemeLink);

    await waitFor(() => {
      expect(document.body.classList.contains("dark")).toBe(true);
    });

    fireEvent.click(changeThemeLink);

    await waitFor(() => {
      expect(document.body.classList.contains("dark")).toBe(false);
    });
  });

  it("fetches expenses on mount and shows the no-expenses fallback", async () => {
    render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:5000/expenses");

    const noExpensesText = await screen.findByText(/no expenses found/i);
    expect(noExpensesText).toBeDefined();
  });
});

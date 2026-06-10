import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NewExpense from "./NewExpense";

describe("NewExpense", () => {
  it("calls onAddExpense with new expense data when the form is submitted", () => {
    const onAddExpense = vi.fn();
    render(<NewExpense onAddExpense={onAddExpense} />);

    fireEvent.click(screen.getByRole("button", { name: /add new expense/i }));

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Test item" },
    });
    fireEvent.change(screen.getByLabelText(/price/i), {
      target: { value: "19.99" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add expense/i }));

    expect(onAddExpense).toHaveBeenCalledTimes(1);
    const expense = onAddExpense.mock.calls[0][0];
    expect(expense.title).toBe("Test item");
    expect(expense.price).toBe("19.99");
    expect(expense.date).toEqual(new Date("2025-12-25"));
    expect(typeof expense.id).toBe("string");

    expect(
      screen.getByRole("button", { name: /add new expense/i }),
    ).toBeTruthy();
  });
});

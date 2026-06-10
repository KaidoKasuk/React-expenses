import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ExpensesFilter from "./ExpensesFilter";

afterEach(() => cleanup());

describe("ExpensesFilter", () => {
  it("calls onChangeFilter with the initial year on mount", () => {
    const onChangeFilter = vi.fn();
    render(<ExpensesFilter onChangeFilter={onChangeFilter} />);

    expect(onChangeFilter).toHaveBeenCalledTimes(1);
    expect(onChangeFilter).toHaveBeenCalledWith("2024");
    expect(screen.getByRole("combobox").value).toBe("2024");
  });

  it("calls onChangeFilter with the selected year when the filter changes", () => {
    const onChangeFilter = vi.fn();
    render(<ExpensesFilter onChangeFilter={onChangeFilter} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2025" } });

    expect(select.value).toBe("2025");
    expect(onChangeFilter).toHaveBeenLastCalledWith("2025");
  });
});

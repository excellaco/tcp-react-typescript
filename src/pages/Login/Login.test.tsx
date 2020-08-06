import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { UserProvider } from "../../context/UserContext/UserContext";
import Login from "./Login";
import { AuthProvider } from "../../context/AuthContext/AuthContext";
import AxiosService from "../../services/Axios/AxiosService";

describe("Login page", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <UserProvider>
          <Login />
        </UserProvider>
      </AuthProvider>
    );
  });

  it("renders the login page", () => {
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});

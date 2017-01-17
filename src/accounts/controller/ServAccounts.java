package accounts.controller;

import accounts.model.IAccountsLocal;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;
import java.net.URLEncoder;

/**
 * Created by rhiobet on 16/01/17.
 */

@WebServlet("/Accounts")
public class ServAccounts extends HttpServlet {

  @EJB
  private IAccountsLocal accounts;

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String op = req.getParameter("op");
    String username, email, password;
    boolean ok;
    String key;

    switch (op) {
      case "login":
        username = req.getParameter("username");
        password = req.getParameter("password");
        key = this.accounts.connection(username, password);
        new HttpServletResponseWrapper(resp).sendRedirect("http://localhost:8080/#/login?username="
                + username + "&key=" + key);
        break;

      case "register":
        username = req.getParameter("username");
        email = req.getParameter("email");
        password = req.getParameter("password");
        ok = this.accounts.addAccount(username, email, password);
        new HttpServletResponseWrapper(resp)
                .sendRedirect("http://localhost:8080/#/signup?state=" + (ok ? "ok" : "nok"));
        break;
    }
  }
}

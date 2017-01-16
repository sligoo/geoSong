package accounts.model;

import javax.ejb.Local;

/**
 * Created by rhiobet on 16/01/17.
 */
@Local
public interface IAccountsLocal {
  boolean addAccount(String username, String email, String password);
  boolean exists(String username);
  boolean connection(String username, String passHash);
  String getEmail(String username);
}

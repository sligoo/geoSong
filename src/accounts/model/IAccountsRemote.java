package accounts.model;

import javax.ejb.Remote;

/**
 * Created by rhiobet on 16/01/17.
 */
@Remote
public interface IAccountsRemote {
  boolean addAccount(String username, String email, String password);
  boolean exists(String username);
  String connection(String username, String passHash);
  String getEmail(String username);
}

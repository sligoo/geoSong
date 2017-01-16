package accounts.model;

import javax.ejb.Singleton;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by rhiobet on 16/01/17.
 */
@Singleton
public class Accounts implements IAccountsLocal, IAccountsRemote {

  private Map<String, String[]> accountsList;
  private MessageDigest sha256;

  public Accounts() {
    this.accountsList = new HashMap<>();
    try {
      this.sha256 = MessageDigest.getInstance("SHA-256");
    } catch (NoSuchAlgorithmException e) {
      e.printStackTrace();
    }
  }

  @Override
  public boolean addAccount(String username, String email, String password) {
    if (!username.equals("") && !exists(username)) {
      this.accountsList.put(username, new String[] {email, new String(sha256.digest(password.getBytes()))});
      return true;
    } else {
      return false;
    }
  }

  @Override
  public boolean exists(String username) {
    return this.accountsList.containsKey(username);
  }

  @Override
  public boolean connection(String username, String password) {
    String[] found = this.accountsList.get(username);
    return found != null && found[1].equals(new String(sha256.digest(password.getBytes())));
  }

  @Override
  public String getEmail(String username) {
    String[] found = this.accountsList.get(username);
    if (found != null) {
      return found[0];
    } else {
      return "";
    }
  }
}

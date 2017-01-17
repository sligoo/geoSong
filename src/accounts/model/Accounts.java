package accounts.model;

import javax.ejb.Singleton;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Calendar;
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
      this.accountsList.put(username, new String[] {email,
              DatatypeConverter.printHexBinary(sha256.digest(password.getBytes())).toLowerCase()});
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
  public String connection(String username, String password) {
    String[] found = this.accountsList.get(username);
    String key;
    if (found != null
            && found[1].equals(DatatypeConverter.printHexBinary(sha256.digest(password.getBytes())).toLowerCase())) {
      key = username + (Calendar.getInstance().getTimeInMillis() / 100000) + "ok";
    } else {
      key = "nok";
    }

    return DatatypeConverter.printHexBinary(sha256.digest(key.getBytes())).toLowerCase();
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

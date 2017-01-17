package accounts.model;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
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

    @PersistanceManager
    EntityManager em;

    private Map<String, String[]> accountsList;
    private MessageDigest sha256;

    public Accounts() {
        try {
            this.sha256 = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean addAccount(String username, String email, String password) {
        if (!username.equals("") && !exists(username)) {
            UsersEntity u = new UsersEntity();
            u.setUsername(username);
            u.setPassword(password);
            u.setEmail(email);
            em.persist(u);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean exists(String username) {
        return (this.em.find(UsersEntity.class, username) != null);
    }

    @Override
    public String connection(String username, String password) {
        UserEntity user = this.em.find(UsersEntity.class, username);
        String key;
        if (user != null
                && user.getPassword().equals(DatatypeConverter.printHexBinary(sha256.digest(password.getBytes())).toLowerCase())) {
            key = username + (Calendar.getInstance().getTimeInMillis() / 100000) + "ok";
        } else {
            key = "nok";
        }

        return DatatypeConverter.printHexBinary(sha256.digest(key.getBytes())).toLowerCase();
    }

    @Override
    public String getEmail(String username) {
        UserEntity user = this.em.find(UsersEntity.class, username);
        if (user != null) {
            return user.getEmail();
        } else {
            return "";
        }
    }
}
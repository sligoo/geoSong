package accounts.model;

import javax.ejb.local;

@Local
public interface ISongsLocal {
    public void addSong(String url);
    public int getSongID(String url);
    public String getSongURL(int id);
}
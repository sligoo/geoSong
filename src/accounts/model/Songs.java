
@Singleton
public class Songs implements ISongsLocal, ISongsRemote {
    @PersistancManager
    EntityManager em;

    public Songs() {}

    public void addSong(String URL) {
        SongsEntity s = new SongsEntity();
        s.setUrl(URL);
        em.persist(s);
    }

    public Collection<Int> getSongID(String URL) {
        SongsEntity s = em.createQuery("from songs where url =" + URL, SongsEntity.class).getResultList();
        if (s.size() != 0) {
            return s.get(0);
        } else {
            return null;
        }
    }

    public String getSongUrl(int id) {
        SongsEntity s = em.find(SongsEntity.class, id);
        if (s != null) {
            return s.getUrl();
        } else {
            return "";
        }
    }
}
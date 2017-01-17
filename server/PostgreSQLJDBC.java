import java.sql.*;
import java.util.List;

public class PostgreSQLJDBC {
    private Connection connection;

    public PostgreSQLJDBC(String URL) {
        this.connection = null;
        try {
            Class.forName("org.postgresql.Driver");
            this.connection = DriverManager
                    .getConnection(URL,
                            "postgres", "");
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
            System.exit(0);
        }
        System.out.println("Opened database successfully");
    }

    public static void main(String args[]) {
        PostgreSQLJDBC dbConnection = new PostgreSQLJDBC("jdbc:postgresql://localhost:5432/geoSong");
    }

    /**
     * Fetches all the geosongs in a chunk
     * @param chunkX chunk x index
     * @param chunkY chunk y index
     * @return
     */
    public List<String> getSongs(int chunkX, int chunkY) {
        try {
            Statement stmt = this.connection.createStatement();
            String query = this.getSongQuery(chunkX, chunkY);
            ResultSet rs = stmt.executeQuery(query);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getSongQuery(int chunkX, int chunkY) {
        double chunkMinLat = Chunks.latitude(chunkX);
        double chunkMaxLat = Chunks.latitude(chunkX + 1);
        double chunkMinLon = Chunks.longitude(chunkY);
        double chunkMaxLon = Chunks.longitude(chunkY + 1);
        String query = "SELECT * FROM GEOSONGS WHERE latitude >= " + chunkMinLat
                + "AND latitude < " + chunkMaxLat
                + "AND longitude >= " + chunkMinLon
                + "AND longitude < " + chunkMaxLon;

        return query;
    }
}

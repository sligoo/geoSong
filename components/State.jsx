class State {
    static connected = false;
    static user = '';

    static setConnected(c) {
        this.connected = c;
    }

    static getConnected() {
        return this.connected;
    }

    static setUser(u) {
        this.user = u;
    }

    static getUser() {
        return this.user;
    }
}

export default State;
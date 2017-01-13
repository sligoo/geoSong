export class MusicPlayer extends React.Component {
    render () {
        return (
            <Details artiste="Artiste" titre="Titre" album="Album" />
        );
    }
}

class Details extends React.Component {
    render() {
        return (
            <div id="details">
                <p>{this.props.artiste}</p>
                <p>{this.props.titre}</p>
                <p>{this.props.album}</p>
            </div>
        )
    }
}
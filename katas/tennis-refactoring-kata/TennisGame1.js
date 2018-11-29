const ADVANTAGE_POINT = 4;
class TennisGame {
    constructor(player1Name, player2Name) {
        this.player1Score = 0;
        this.player2Score = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName) {
        if (playerName === this.player1Name)
            this.player1Score += 1;
        else
            this.player2Score += 1;
    };

    getEquality() {
        switch (this.player1Score) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            default:
                return "Deuce";
        };
    };

    getAdvantage() {
        const scoreDifference = this.player1Score - this.player2Score;
        if (scoreDifference === 1) return "Advantage " + this.player1Name;
        if (scoreDifference === -1) return "Advantage " + this.player2Name;
        if (scoreDifference >= 2) return "Win for " + this.player1Name;
        return "Win for " + this.player2Name;
    };

    getPlayerScore(score) {
        switch (score) {
            case 0:
                return "Love";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
        }
    }

    getDefaultScore() {
        return this.getPlayerScore(this.player1Score) + "-" + this.getPlayerScore(this.player2Score)
    }
    
    getScore() {
        if (this.player1Score === this.player2Score) {
            return this.getEquality();
        } 
        if (this.player1Score >= ADVANTAGE_POINT || this.player2Score >= ADVANTAGE_POINT) {
            return this.getAdvantage();
        } 
        return this.getDefaultScore();

    };
}

if (typeof window === "undefined") {
    module.exports = TennisGame;
}
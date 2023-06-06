export function healthStatus(name, health) {

    if (health > 50) {
        return 'healthy'
    }
    if (health <= 50 && health > 15) {
        return 'wounded'
    }
    if (health <= 15) {
        return 'critical'
    }
}
export async function loadWeatherIcon(iconName) {
    try {
        const icon = await import(
            `./assets/icons/${iconName}.svg`
        );

        return icon.default;

    } catch (error) {
        console.error("Icon not found:", iconName);

        const fallback = await import(
            "./assets/icons/cloudy.svg"
        );

        return fallback.default;
    }
}
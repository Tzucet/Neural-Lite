export async function onRequest(context) {
    // 1. 从前端请求的 URL 中获取 city 参数
    const url = new URL(context.request.url);
    const city = url.searchParams.get("city");

    if (!city) {
        return new Response(JSON.stringify({ error: "City is required" }), { status: 400 });
    }

    // 2. 从 Cloudflare 环境变量中获取 Token (这就是我们要保护的秘密)
    const token = context.env.WAQI_TOKEN;

    if (!token) {
        return new Response(JSON.stringify({ error: "Server configuration error" }), { status: 500 });
    }

    // 3. 服务端发起请求，带上 Token
    const targetUrl = `https://api.waqi.info/search/?keyword=${encodeURIComponent(city)}&token=${token}`;

    try {
        const apiResponse = await fetch(targetUrl);
        const data = await apiResponse.json();

        // 4. 将天气数据原封不动地返回给前端
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to fetch weather data" }), { status: 500 });
    }
}
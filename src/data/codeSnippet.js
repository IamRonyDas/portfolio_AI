const codeSnippets = [
  {
    title: "rateLimiter.js (Next.js)",
    language: "JavaScript/Redis",
    content: `// Next.js API Middleware for IP-based Rate Limiting
import { Redis } from '@upstash/redis';
// Simulating an external Redis client connection

export default function rateLimitMiddleware(handler) {
  return async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const key = \`rate_limit:\${ip}\`;
    const limit = 10; // Max requests per window
    const window = 60; // seconds

    // Check rate limit status in Redis
    const current = await redis.incr(key);

    if (current === 1) {
      await redis.expire(key, window);
    }

    if (current > limit) {
      return res.status(429).json({ error: 'Rate limit exceeded.' });
    }

    return handler(req, res);
  };
}
`
  },
  {
    title: "BluetoothService.kt (Android/Visteon)",
    language: "Kotlin/Spring Boot",
    content: `// Kotlin background service for Visteon/Android connectivity
@Service
class BluetoothConnectivityService @Autowired constructor(
    private val btManager: BluetoothManager
) {
    private val log = LoggerFactory.getLogger(BluetoothConnectivityService::class.java)

    @PostConstruct
    fun startDiscovery() {
        // Simulates starting the BLE device scan on system boot
        log.info("Starting Bluetooth Service Discovery...")
        
        val adapter = btManager.adapter
        if (adapter != null && adapter.isEnabled) {
            log.debug("Adapter enabled. Scanning for known devices...")
            // The service maintains the connection state 
            // and manages critical defects/reconnections.
        } else {
            log.warn("Bluetooth adapter is not available or disabled.")
        }
    }

    fun handleDefect(defectId: Int) {
        log.error("Defect #\${defectId} encountered. Attempting soft reset...")
        // Logic to implement defect resolution (e.g., clearing BT cache)
    }
}
`
  },
  {
    title: "KafkaProducerConfig.java (Microservices)",
    language: "Java/Kafka",
    content: `// Java Configuration for Microservice Kafka Producer
@Configuration
public class KafkaProducerConfig {

    @Value("\${spring.kafka.bootstrap-servers}")
    private String bootstrapServers;

    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        // High throughput configuration for 5K+ concurrent users
        configProps.put(ProducerConfig.ACKS_CONFIG, "all");
        configProps.put(ProducerConfig.RETRIES_CONFIG, 10);
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}
`
  }
];
export default codeSnippets;
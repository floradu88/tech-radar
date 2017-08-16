var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 99,
      "t": 113
    },
    "movement": "t"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 55,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 59,
      "t": 139
    },
    "movement": "t"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 61,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 58,
      "t": 165
    },
    "movement": "t"
  },
  {
    "name": "RxJava (Android)",
    "pc": {
      "r": 85,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 59,
      "t": 119
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 106,
      "t": 132
    },
    "movement": "t"
  },
  {
    "name": "Akka-Http",
    "pc": {
      "r": 248,
      "t": 96
    },
    "movement": "t"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 253,
      "t": 136
    },
    "movement": "t"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 242,
      "t": 156
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 285,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 256,
      "t": 116
    },
    "movement": "t"
  },
  {
    "name": "Http4s",
    "pc": {
      "r": 259,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 290,
      "t": 106
    },
    "movement": "t"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 263,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 389,
      "t": 102
    },
    "movement": "t"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 320,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 378,
      "t": 142
    },
    "movement": "t"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 360,
      "t": 94
    },
    "movement": "t"
  },
  {
    "name": "Spray",
    "pc": {
      "r": 355,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 196,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 194,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 185,
      "t": 122
    },
    "movement": "t"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 164,
      "t": 134
    },
    "movement": "t"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 162,
      "t": 158
    },
    "movement": "t"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 183,
      "t": 98
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "AWS EMR",
    "pc": {
      "r": 90,
      "t": 49
    },
    "movement": "t"
  },
  {
    "name": "AWS S3",
    "pc": {
      "r": 69,
      "t": 10
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 63,
      "t": 75
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 102,
      "t": 23
    },
    "movement": "t"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 60,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 120,
      "t": 62
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 102,
      "t": 29
    },
    "movement": "t"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 86,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 58,
      "t": 55
    },
    "movement": "t"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 107,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 99,
      "t": 42
    },
    "movement": "t"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 64,
      "t": 0
    },
    "movement": "t"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 274,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 269,
      "t": 66
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 277,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 253,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 345,
      "t": 12
    },
    "movement": "t"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 387,
      "t": 52
    },
    "movement": "t"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 360,
      "t": 28
    },
    "movement": "t"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 377,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 370,
      "t": 76
    },
    "movement": "t"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 378,
      "t": 4
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 369,
      "t": 20
    },
    "movement": "t"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 349,
      "t": 84
    },
    "movement": "t"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 344,
      "t": 44
    },
    "movement": "t"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 345,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 381,
      "t": 60
    },
    "movement": "t"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 357,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 325,
      "t": 72
    },
    "movement": "t"
  },
  {
    "name": "Oracle DB",
    "pc": {
      "r": 335,
      "t": 80
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 355,
      "t": 40
    },
    "movement": "t"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 373,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 179,
      "t": 32
    },
    "movement": "t"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 147,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 140,
      "t": 44
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 193,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 149,
      "t": 80
    },
    "movement": "t"
  },
  {
    "name": "Presto",
    "pc": {
      "r": 152,
      "t": 20
    },
    "movement": "t"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 113,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 76,
      "t": 242
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 103,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 95,
      "t": 203
    },
    "movement": "t"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 55,
      "t": 190
    },
    "movement": "t"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 106,
      "t": 255
    },
    "movement": "t"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 77,
      "t": 235
    },
    "movement": "t"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 119,
      "t": 209
    },
    "movement": "t"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 97,
      "t": 222
    },
    "movement": "t"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 260,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 280,
      "t": 206
    },
    "movement": "t"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 338,
      "t": 264
    },
    "movement": "t"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 363,
      "t": 184
    },
    "movement": "t"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 324,
      "t": 248
    },
    "movement": "t"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 361,
      "t": 192
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 346,
      "t": 256
    },
    "movement": "t"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 161,
      "t": 224
    },
    "movement": "t"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 143,
      "t": 248
    },
    "movement": "t"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 171,
      "t": 236
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Go",
    "pc": {
      "r": 92,
      "t": 306
    },
    "movement": "t"
  },
  {
    "name": "Java",
    "pc": {
      "r": 90,
      "t": 319
    },
    "movement": "t"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 57,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 70,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 118,
      "t": 280
    },
    "movement": "t"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 74,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 299,
      "t": 326
    },
    "movement": "t"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 288,
      "t": 306
    },
    "movement": "t"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 267,
      "t": 336
    },
    "movement": "t"
  },
  {
    "name": "R",
    "pc": {
      "r": 257,
      "t": 296
    },
    "movement": "t"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 244,
      "t": 286
    },
    "movement": "t"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 325,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 324,
      "t": 354
    },
    "movement": "t"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 353,
      "t": 298
    },
    "movement": "t"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 347,
      "t": 282
    },
    "movement": "t"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 353,
      "t": 290
    },
    "movement": "t"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 328,
      "t": 314
    },
    "movement": "t"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 349,
      "t": 330
    },
    "movement": "t"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 349,
      "t": 274
    },
    "movement": "t"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 378,
      "t": 306
    },
    "movement": "t"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 372,
      "t": 322
    },
    "movement": "t"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 187,
      "t": 302
    },
    "movement": "t"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 168,
      "t": 278
    },
    "movement": "c"
  }
]
  }
];

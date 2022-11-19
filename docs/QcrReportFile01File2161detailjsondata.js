console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java 123 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.tools.VerifiableProducer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.VerifiableProducer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#68"
 , "c1" : "VerifiableProducer"
 , "c2" : "VerifiableProducer(KafkaProducer<String,String>;String;int;int;Integer;Long;Integer)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#83"
 , "c1" : "ArgumentParser"
 , "c2" : "argParser()"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#176"
 , "c1" : "Properties"
 , "c2" : "loadProps(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00185"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#185"
 , "c1" : "VerifiableProducer"
 , "c2" : "createFromArgs(ArgumentParser;String[])"
 , "c3" : "7"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00233"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#233"
 , "c1" : "void"
 , "c2" : "send(String;String)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00258"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#258"
 , "c1" : "String"
 , "c2" : "getValue(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00265"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#265"
 , "c1" : "String"
 , "c2" : "getKey()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00277"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#277"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00441"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#441"
 , "c1" : "void"
 , "c2" : "printJson(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00472"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#472"
 , "c1" : "void"
 , "c2" : "run(ThroughputThrottler)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00492"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#492"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "2"
 , "c4" : "15"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "107"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class VerifiableProducer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'verifiable-producer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'This tool produces increasing integers to the specified topic and prints JSON metadata to stdout on each \'send\' request, making externally visible which messages have been acked and which have not.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'TOPIC' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Produce messages to this topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Connection Group' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Group of arguments for connection to brokers' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--bootstrap-server' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'HOST1:PORT1[,HOST2:PORT2[...]]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'REQUIRED: The server(s) to connect to. Comma-separated list of Kafka brokers in the form HOST1:PORT1,HOST2:PORT2,...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--broker-list' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'HOST1:PORT1[,HOST2:PORT2[...]]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'DEPRECATED, use --bootstrap-server instead; ignored if --bootstrap-server is specified.  Comma-separated list of Kafka brokers in the form HOST1:PORT1,HOST2:PORT2,...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--max-messages' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'MAX-MESSAGES' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Produce this many messages. If -1, produce messages until the process is killed externally.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--throughput' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'THROUGHPUT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'If set &amp;gt;= 0, throttle maximum message throughput to *approximately* THROUGHPUT messages/sec.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--acks' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'ACKS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Acks required on each produced message. See Kafka docs on acks for details.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--producer.config' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'CONFIG_FILE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Producer config properties file.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--message-create-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'CREATETIME' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'createTime' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'Send messages with creation time starting at the arguments value, in milliseconds since epoch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--value-prefix' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'VALUE-PREFIX' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'valuePrefix' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'If specified, each produced value will have this prefix with a dot separator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  '--repeating-keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'REPEATING-KEYS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'repeatingKeys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.tools.VerifiableProducer.argParser@POLYN211226 the MagicNumber/String  'If specified, each produced record will have a key starting at 0 increment by 1 up to the number specified (exclusive), then the key is set to 0 again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method loadProps arguments String  filename"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method createFromArgs arguments ArgumentParser  parser|String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#185"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00185] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'maxMessages' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'throughput' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'producer.config' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'valuePrefix' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'createTime' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'repeatingKeys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'bootstrapServer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'brokerList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'org.apache.kafka.common.serialization.StringSerializer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'org.apache.kafka.common.serialization.StringSerializer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  'acks' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.tools.VerifiableProducer.createFromArgs@POLYN215958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method send arguments String  key|String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#251"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00251] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.tools.VerifiableProducer.send@POLYN219000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.tools.VerifiableProducer.send@POLYN219000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00258] For method getValue arguments long  val"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.tools.VerifiableProducer.getValue@POLYN220172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.tools.VerifiableProducer.getValue@POLYN220172 the MagicNumber/String  '%d.%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.tools.VerifiableProducer.getValue@POLYN220172 the MagicNumber/String  '%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.tools.VerifiableProducer.getKey@POLYN220557 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.tools.VerifiableProducer.getKey@POLYN220557 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.tools.VerifiableProducer.getKey@POLYN220557 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00283] The class ProducerEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.tools.VerifiableProducer.StartupComplete.name@POLYN221626 the MagicNumber/String  'startup_complete' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.tools.VerifiableProducer.ShutdownComplete.name@POLYN221780 the MagicNumber/String  'shutdown_complete' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.tools.VerifiableProducer.SuccessfulSend.SuccessfulSend@POLYN222029 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.tools.VerifiableProducer.SuccessfulSend.SuccessfulSend@POLYN222029 the MagicNumber/String  'Expected non-null recordMetadata object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.tools.VerifiableProducer.SuccessfulSend.name@POLYN222476 the MagicNumber/String  'producer_send_success' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.tools.VerifiableProducer.FailedSend.FailedSend@POLYN223325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.tools.VerifiableProducer.FailedSend.FailedSend@POLYN223325 the MagicNumber/String  'Expected non-null exception.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.tools.VerifiableProducer.FailedSend.name@POLYN223861 the MagicNumber/String  'producer_send_error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.tools.VerifiableProducer.ToolData.name@POLYN225126 the MagicNumber/String  'tool_data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00441] For method printJson arguments Object  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.tools.VerifiableProducer.printJson@POLYN225711 the MagicNumber/String  'Bad data can't be written as json: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00450] The class PrintInfoCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#460"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00460] For method onCompletion arguments RecordMetadata  recordMetadata|Exception  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#461"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00461] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.tools.VerifiableProducer.PrintInfoCallback.onCompletion@POLYN226417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#472"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00472] For method run arguments ThroughputThrottler  throttler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#472"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00472] The argument throttler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.tools.VerifiableProducer.run@POLYN227070 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.tools.VerifiableProducer.run@POLYN227070 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00492] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#492"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00492] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00497"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00519"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  'verifiable-producer-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00525"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.tools.VerifiableProducer.main@POLYN228019 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/tools/src/main/java/org/apache/kafka/tools/VerifiableProducer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

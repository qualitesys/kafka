console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java 28 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#40"
 , "c1" : "KafkaConsumerMetrics"
 , "c2" : "KafkaConsumerMetrics(Metrics;String)"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#91"
 , "c1" : "void"
 , "c2" : "recordPollStart(long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#98"
 , "c1" : "void"
 , "c2" : "recordPollEnd(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#104"
 , "c1" : "void"
 , "c2" : "recordCommitSync(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#108"
 , "c1" : "void"
 , "c2" : "recordCommitted(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#113"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  '-metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  1d should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'last-poll-seconds-ago' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The number of seconds since the last poll() invocation.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'time-between-poll' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'time-between-poll-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The average delay between invocations of poll() in milliseconds.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'time-between-poll-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The max delay between invocations of poll() in milliseconds.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'poll-idle-ratio-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'poll-idle-ratio-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The average fraction of time the consumer's poll() is idle as opposed to waiting for the user code to process records.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'commit-sync-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'commit-sync-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The total time the consumer has spent in commitSync in nanoseconds' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'committed-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'committed-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN155519 the MagicNumber/String  'The total time the consumer has spent in committed in nanoseconds' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method recordPollStart arguments long  pollStartMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollStart@POLYN157782 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollStart@POLYN157782 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method recordPollEnd arguments long  pollEndMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN158210 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method recordCommitSync arguments long  duration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method recordCommitted arguments long  duration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.close@POLYN158878"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

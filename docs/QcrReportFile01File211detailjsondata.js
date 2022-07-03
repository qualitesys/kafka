console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java 29 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaConsumerMetrics"
 , "c2" : "KafkaConsumerMetrics(Metrics;String)"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordPollStart(long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordPollEnd(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordCommitSync(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordCommitted(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class KafkaConsumerMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  '-metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  1d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'last-poll-seconds-ago' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The number of seconds since the last poll() invocation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'time-between-poll' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'time-between-poll-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The average delay between invocations of poll() in milliseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'time-between-poll-max' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The max delay between invocations of poll() in milliseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'poll-idle-ratio-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'poll-idle-ratio-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The average fraction of time the consumer's poll() is idle as opposed to waiting for the user code to process records.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'commit-sync-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'commit-sync-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The total time the consumer has spent in commitSync in nanoseconds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'committed-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'committed-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.KafkaConsumerMetrics@POLYN176085 the MagicNumber/String  'The total time the consumer has spent in committed in nanoseconds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method recordPollStart arguments long  pollStartMs"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollStart@POLYN178348 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollStart@POLYN178348 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method recordPollEnd arguments long  pollEndMs"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN178776 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method recordCommitSync arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method recordCommitted arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/KafkaConsumerMetrics.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.close@POLYN179444"
}} 
]
};
console.log('leListeStr 99 main end');

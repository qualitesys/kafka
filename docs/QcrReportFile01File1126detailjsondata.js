console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java 22 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ErrantRecordReporter"
 , "c2" : "org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#60"
 , "c1" : "WorkerErrantRecordReporter"
 , "c2" : "WorkerErrantRecordReporter(RetryWithToleranceOperator;Converter;Converter;HeaderConverter)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#74"
 , "c1" : "Future<Void>"
 , "c2" : "report(SinkRecord;Throwable)"
 , "c3" : "6"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#122"
 , "c1" : "void"
 , "c2" : "awaitFutures(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#137"
 , "c1" : "void"
 , "c2" : "cancelFutures(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00149"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#149"
 , "c1" : "Collection<Future<Void>>"
 , "c2" : "futuresFor(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method report arguments SinkRecord  record|Throwable  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method report list of called methods Object monObjet|byte[] keyConverter_fromConnectDataN171036|byte[] valueConverter_fromConnectDataN171220|java.lang.String header_keyN171659|byte[] headerConverter_fromConnectHeaderN171740|java.util.concurrent.Future retryWithToleranceOperator_executeFailedN172789"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method awaitFutures arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.awaitFutures@POLYN173494 the MagicNumber/String  'Encountered an error while awaiting an errant record future's completion.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method cancelFutures arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.cancelFutures@POLYN174087 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.cancelFutures@POLYN174087 the MagicNumber/String  'Encountered an error while cancelling an errant record future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method futuresFor arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method cancel arguments boolean  mayInterruptIfRunning"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.ErrantRecordFuture.cancel@POLYN175329 the MagicNumber/String  'Reporting an errant record cannot be cancelled.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.ErrantRecordFuture.isCancelled@POLYN175477 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.ErrantRecordFuture.get@POLYN175722 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00188] For method get arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.ErrantRecordFuture.get@POLYN175982 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/WorkerErrantRecordReporter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

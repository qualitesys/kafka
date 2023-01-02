console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java 33 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.metadata.util.SnapshotFileReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.util.SnapshotFileReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#62"
 , "c1" : "SnapshotFileReader"
 , "c2" : "SnapshotFileReader(String;RaftClient.Listener<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#70"
 , "c1" : "void"
 , "c2" : "startup()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#90"
 , "c1" : "void"
 , "c2" : "handleNextBatch()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#104"
 , "c1" : "void"
 , "c2" : "scheduleHandleNextBatch()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#119"
 , "c1" : "void"
 , "c2" : "handleControlBatch(FileChannelRecordBatch)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#144"
 , "c1" : "void"
 , "c2" : "handleMetadataBatch(FileChannelRecordBatch)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00171"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#171"
 , "c1" : "void"
 , "c2" : "beginShutdown(String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00196"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#196"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00201"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#201"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "caughtUpFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.metadata.util.SnapshotFileReader.SnapshotFileReader@POLYN169458 the MagicNumber/String  '[snapshotReaderQueue] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.metadata.util.SnapshotFileReader.SnapshotFileReader@POLYN169458 the MagicNumber/String  'snapshotReaderQueue_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169992 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169992 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169992 the MagicNumber/String  'startup error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleNextBatch@POLYN170956 the MagicNumber/String  'done' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.metadata.util.SnapshotFileReader.scheduleHandleNextBatch@POLYN171493 the MagicNumber/String  'Unexpected error while handling a batch of events' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.metadata.util.SnapshotFileReader.scheduleHandleNextBatch@POLYN171493 the MagicNumber/String  'handleBatch error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method handleControlBatch arguments FileChannelRecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00134] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171978 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171978 the MagicNumber/String  'Ignoring control record with type {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171978 the MagicNumber/String  'unable to read control record at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method handleMetadataBatch arguments FileChannelRecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleMetadataBatch@POLYN173422 the MagicNumber/String  'unable to read metadata record at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method beginShutdown arguments String  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00171] The argument reason is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  'done' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174599 the MagicNumber/String  'shutdown error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.metadata.util.SnapshotFileReader.close@POLYN175631 the MagicNumber/String  'closing' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

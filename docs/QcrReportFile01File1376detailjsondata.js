console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java 34 rule violations " 
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
 , "c5" : "00045"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#45"
 , "c1" : "SnapshotFileReader"
 , "c2" : "SnapshotFileReader(String;RaftClient.Listener<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#53"
 , "c1" : "void"
 , "c2" : "startup()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#73"
 , "c1" : "void"
 , "c2" : "handleNextBatch()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#87"
 , "c1" : "void"
 , "c2" : "scheduleHandleNextBatch()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#102"
 , "c1" : "void"
 , "c2" : "handleControlBatch(FileChannelRecordBatch)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#127"
 , "c1" : "void"
 , "c2" : "handleMetadataBatch(FileChannelRecordBatch)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#154"
 , "c1" : "void"
 , "c2" : "beginShutdown(String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#179"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#184"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class SnapshotFileReader contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.metadata.util.SnapshotFileReader.SnapshotFileReader@POLYN168924 the MagicNumber/String  '[snapshotReaderQueue] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.metadata.util.SnapshotFileReader.SnapshotFileReader@POLYN168924 the MagicNumber/String  'snapshotReaderQueue_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169458 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169458 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.metadata.util.SnapshotFileReader.startup@POLYN169458 the MagicNumber/String  'startup error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleNextBatch@POLYN170422 the MagicNumber/String  'done' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.metadata.util.SnapshotFileReader.scheduleHandleNextBatch@POLYN170959 the MagicNumber/String  'Unexpected error while handling a batch of events' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.metadata.util.SnapshotFileReader.scheduleHandleNextBatch@POLYN170959 the MagicNumber/String  'handleBatch error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method handleControlBatch arguments FileChannelRecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00117] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171444 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171444 the MagicNumber/String  'Ignoring control record with type {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN171444 the MagicNumber/String  'unable to read control record at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method handleMetadataBatch arguments FileChannelRecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.metadata.util.SnapshotFileReader.handleMetadataBatch@POLYN172888 the MagicNumber/String  'unable to read metadata record at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method beginShutdown arguments String  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument reason is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  'done' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.metadata.util.SnapshotFileReader.beginShutdown@POLYN174065 the MagicNumber/String  'shutdown error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.metadata.util.SnapshotFileReader.close@POLYN175097 the MagicNumber/String  'closing' should be converted to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileReader.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');

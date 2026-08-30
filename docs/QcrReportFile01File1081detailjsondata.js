console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java 38 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.SubmittedRecords"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.SubmittedRecords" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#51"
 , "c1" : "SubmittedRecords"
 , "c2" : "SubmittedRecords()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#66"
 , "c1" : "SubmittedRecord"
 , "c2" : "submit(SourceRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#71"
 , "c1" : "SubmittedRecord"
 , "c2" : "submit(Map&lt;String,Object&gt;;Map&lt;String,Object&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#90"
 , "c1" : "CommittableOffsets"
 , "c2" : "committableOffsets()"
 , "c3" : "4"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#125"
 , "c1" : "boolean"
 , "c2" : "awaitAllMessages(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#142"
 , "c1" : "Map&lt;String,Object&gt;"
 , "c2" : "committableOffset(Deque&lt;SubmittedRecord&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#150"
 , "c1" : "boolean"
 , "c2" : "canCommitHead(Deque&lt;SubmittedRecord&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#157"
 , "c1" : "void"
 , "c2" : "messageAcked()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method submit arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method submit arguments Map&lt;String ,Object &gt;  partition|Map&lt;String ,Object &gt;  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#75"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00075] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN205299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN205299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN205299 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN205299 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method awaitAllMessages arguments long  timeout|TimeUnit  timeUnit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#129"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00129] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.runtime.SubmittedRecords.awaitAllMessages@POLYN207621 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method committableOffset arguments Deque&lt;SubmittedRecord &gt;  queuedRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument queuedRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffset@POLYN208188 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method canCommitHead arguments Deque&lt;SubmittedRecord &gt;  queuedRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument queuedRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00151] The same method call queuedRecords.peek() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.connect.runtime.SubmittedRecords.canCommitHead@POLYN208590 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#157"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00157] Lock statement on synchronized method messageAcked"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.runtime.SubmittedRecords.messageAcked@POLYN208822 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.SubmittedRecord@POLYN209266 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.ack@POLYN209794 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.ack@POLYN209794 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN210373 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN210373 the MagicNumber/String  'Attempted to remove record from submitted queue for partition {}, but no records with that partition appear to have been submitted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN210373 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN210373 the MagicNumber/String  'Attempted to remove record from submitted queue for partition {}, but the record has not been submitted or has already been removed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.CommittableOffsets@POLYN212483 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.hasPending@POLYN214778 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.isEmpty@POLYN214956 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.isEmpty@POLYN214956 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#328"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00328] For method updatedWith arguments CommittableOffsets  newerOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#328"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00328] The argument newerOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00066] Public method submit is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00090] Public method committableOffsets is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

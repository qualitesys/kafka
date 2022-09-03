console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java 42 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.xml" 
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
 , "c1" : "SubmittedRecords"
 , "c2" : "SubmittedRecords()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SubmittedRecord"
 , "c2" : "submit(SourceRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SubmittedRecord"
 , "c2" : "submit(Map<String,Object>;Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "CommittableOffsets"
 , "c2" : "committableOffsets()"
 , "c3" : "4"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "awaitAllMessages(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<String,Object>"
 , "c2" : "committableOffset(Deque<SubmittedRecord>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "canCommitHead(Deque<SubmittedRecord>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
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
 , "c1" : "00019"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class SubmittedRecords contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method submit arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method submit arguments Map&lt;String ,Object &gt;  partition|Map&lt;String ,Object &gt;  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#42"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00042] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method committableOffsets list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; committableOffsetN203611"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00060] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN202479 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN202479 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN202479 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffsets@POLYN202479 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method awaitAllMessages arguments long  timeout|TimeUnit  timeUnit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#82"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00082] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.runtime.SubmittedRecords.awaitAllMessages@POLYN204777 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method committableOffset arguments Deque&lt;SubmittedRecord &gt;  queuedRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument queuedRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.runtime.SubmittedRecords.committableOffset@POLYN205342 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method canCommitHead arguments Deque&lt;SubmittedRecord &gt;  queuedRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument queuedRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00104] The same method call queuedRecords.peek() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.runtime.SubmittedRecords.canCommitHead@POLYN205742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#110"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00110] Lock statement on synchronized method messageAcked"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.runtime.SubmittedRecords.messageAcked@POLYN205974 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00117] The class SubmittedRecord contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.SubmittedRecord@POLYN206418 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.ack@POLYN206946 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.ack@POLYN206946 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN207525 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN207525 the MagicNumber/String  'Attempted to remove record from submitted queue for partition {}, but no records with that partition appear to have been submitted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN207525 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.connect.runtime.SubmittedRecords.SubmittedRecord.drop@POLYN207525 the MagicNumber/String  'Attempted to remove record from submitted queue for partition {}, but the record has not been submitted or has already been removed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00168] The class CommittableOffsets contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.CommittableOffsets@POLYN209631 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.hasPending@POLYN211926 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.isEmpty@POLYN212104 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets.isEmpty@POLYN212104 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method updatedWith arguments CommittableOffsets  newerOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00237] The argument newerOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00033] Public method submit is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/SubmittedRecords.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00049] Public method committableOffsets is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java 62 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.PartitionRegistration"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.PartitionRegistration" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "electionWasClean(int;int[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PartitionRegistration"
 , "c2" : "PartitionRegistration(PartitionRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PartitionRegistration"
 , "c2" : "PartitionRegistration(int[];int[];int[];int[];int;LeaderRecoveryState;int;int)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "PartitionRegistration"
 , "c2" : "merge(PartitionChangeRecord)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "diff(PartitionRegistration)"
 , "c3" : "9"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeLogPartitionChange(Logger;String;PartitionRegistration)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasLeader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPreferredLeader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "preferredReplica()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessageAndVersion"
 , "c2" : "toRecord(Uuid;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "LeaderAndIsrPartitionState"
 , "c2" : "toLeaderAndIsrPartitionState(TopicPartition;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isReassigning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
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
 , "c4" : "48"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class PartitionRegistration contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method electionWasClean arguments int  newLeader|int[]  isr"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method merge arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.metadata.PartitionRegistration.merge@POLYN183461 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method diff arguments PartitionRegistration  prev"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument prev is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'replicas: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'isr: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'removingReplicas: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'addingReplicas: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'leader: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'leaderRecoveryState: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'leaderEpoch: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  'partitionEpoch: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.metadata.PartitionRegistration.diff@POLYN185250 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method maybeLogPartitionChange arguments Logger  log|String  description|PartitionRegistration  prev"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument prev is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.metadata.PartitionRegistration.maybeLogPartitionChange@POLYN188965 the MagicNumber/String  'UNCLEAN partition change for {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.metadata.PartitionRegistration.maybeLogPartitionChange@POLYN188965 the MagicNumber/String  'partition change for {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.metadata.PartitionRegistration.preferredReplica@POLYN189809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.metadata.PartitionRegistration.preferredReplica@POLYN189809 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method toRecord arguments Uuid  topicId|int  partitionId"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method toLeaderAndIsrPartitionState arguments TopicPartition  tp|boolean  isNew"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00173] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.metadata.PartitionRegistration.toLeaderAndIsrPartitionState@POLYN190808 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.metadata.PartitionRegistration.isReassigning@POLYN191699 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.metadata.PartitionRegistration.isReassigning@POLYN191699 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.metadata.PartitionRegistration.equals@POLYN192178 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  'PartitionRegistration(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  'replicas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', isr=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', removingReplicas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', addingReplicas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', leader=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', leaderRecoveryState=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', leaderEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ', partitionEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/PartitionRegistration.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.metadata.PartitionRegistration.toString@POLYN193040 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

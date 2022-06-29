console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java 41 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.timeline.SnapshotRegistry"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.SnapshotRegistry" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SnapshotRegistry"
 , "c2" : "SnapshotRegistry(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<Snapshot>"
 , "c2" : "iterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<Snapshot>"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<Snapshot>"
 , "c2" : "iterator(Snapshot)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<Snapshot>"
 , "c2" : "reverseIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Long>"
 , "c2" : "epochsList()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasSnapshot(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Snapshot"
 , "c2" : "getSnapshot(long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Snapshot"
 , "c2" : "getOrCreateSnapshot(long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "revertToSnapshot(long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteSnapshot(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteSnapshot(Snapshot)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteSnapshotsUpTo(long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "latestEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "register(Revertable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class SnapshotRegistry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class SnapshotIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.timeline.SnapshotRegistry.SnapshotIterator.remove@POLYN195479 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.timeline.SnapshotRegistry.SnapshotIterator.remove@POLYN195479 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class ReverseSnapshotIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method iterator arguments Snapshot  snapshot"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method hasSnapshot arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method getSnapshot arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.timeline.SnapshotRegistry.getSnapshot@POLYN198921 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.timeline.SnapshotRegistry.getSnapshot@POLYN198921 the MagicNumber/String  'No snapshot for epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.timeline.SnapshotRegistry.getSnapshot@POLYN198921 the MagicNumber/String  '. Snapshot ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.timeline.SnapshotRegistry.getSnapshot@POLYN198921 the MagicNumber/String  'epochs are: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.timeline.SnapshotRegistry.getSnapshot@POLYN198921 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method getOrCreateSnapshot arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.timeline.SnapshotRegistry.getOrCreateSnapshot@POLYN199767 the MagicNumber/String  'Can't create a new snapshot at epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.timeline.SnapshotRegistry.getOrCreateSnapshot@POLYN199767 the MagicNumber/String  ' because there is already a snapshot with epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.timeline.SnapshotRegistry.getOrCreateSnapshot@POLYN199767 the MagicNumber/String  'Creating snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method revertToSnapshot arguments long  targetEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00152] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.timeline.SnapshotRegistry.revertToSnapshot@POLYN200786 the MagicNumber/String  'Deleting snapshot {} because we are reverting to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method deleteSnapshot arguments long  targetEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method deleteSnapshot arguments Snapshot  snapshot"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.timeline.SnapshotRegistry.deleteSnapshot@POLYN201799 the MagicNumber/String  'Deleting snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method deleteSnapshotsUpTo arguments long  targetEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00180] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.timeline.SnapshotRegistry.deleteSnapshotsUpTo@POLYN202470 the MagicNumber/String  'Deleting snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method register arguments Revertable  revertable"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00087] Public method iterator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00092] Public method iterator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00097] Public method iterator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00102] Public method reverseIterator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00107] Public method epochsList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00115] Public method hasSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00120] Public method getSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00190] Public method latestEpoch is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00161] Public method deleteSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00195] Public method register is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshotRegistry.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00200] Public method reset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

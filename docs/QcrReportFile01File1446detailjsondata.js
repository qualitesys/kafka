console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java 31 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "4"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class Snapshots contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method snapshotDir arguments Path  logDir"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method filenameFromSnapshotId arguments OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.snapshot.Snapshots.filenameFromSnapshotId@POLYN173471 the MagicNumber/String  '%s-%s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method moveRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method deleteRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method snapshotPath arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method createTempFile arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN174474 the MagicNumber/String  '%s-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN174474 the MagicNumber/String  'Error creating temporary file, logDir = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method parse arguments Path  path"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN175288 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method deleteIfExists arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN176861 the MagicNumber/String  'Deleted snapshot files for snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN176861 the MagicNumber/String  'Did not delete snapshot files for snapshot {} since they did not exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN176861 the MagicNumber/String  'Error deleting snapshot files {} and {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN176861 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method markForDelete arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN177918 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN177918 the MagicNumber/String  'Error renaming snapshot file from %s to %s.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');

console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java 39 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.snapshot.Snapshots"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.Snapshots" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#36"
 , "c1" : "Path"
 , "c2" : "snapshotDir(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#40"
 , "c1" : "String"
 , "c2" : "filenameFromSnapshotId(OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#44"
 , "c1" : "Path"
 , "c2" : "moveRename(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#48"
 , "c1" : "Path"
 , "c2" : "deleteRename(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#52"
 , "c1" : "Path"
 , "c2" : "snapshotPath(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#56"
 , "c1" : "Path"
 , "c2" : "createTempFile(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c1" : "Optional<SnapshotPath>"
 , "c2" : "parse(Path)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#98"
 , "c1" : "boolean"
 , "c2" : "deleteIfExists(Path;OffsetAndEpoch)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#116"
 , "c1" : "void"
 , "c2" : "markForDelete(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
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
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method snapshotDir arguments Path  logDir"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method filenameFromSnapshotId arguments OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.snapshot.Snapshots.filenameFromSnapshotId@POLYN161263 the MagicNumber/String  '%s-%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method moveRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method deleteRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method snapshotPath arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method createTempFile arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method createTempFile list of called methods Object monObjet|java.nio.file.Path snapshotDirN162388"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN162266 the MagicNumber/String  '%s-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN162266 the MagicNumber/String  'Error creating temporary file, logDir = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method parse arguments Path  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00071] For method parse list of called methods Object monObjet|java.lang.String filename_toStringN163381|long Long_parseLongN164011|int Integer_parseIntN164168"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN163080 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method deleteIfExists arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00098] For method deleteIfExists list of called methods Object monObjet|java.nio.file.Path snapshotPathN164775|java.nio.file.Path deleteRenameN164883"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String  'Deleted snapshot files for snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String  'Did not delete snapshot files for snapshot {} since they did not exist.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String  'Error deleting snapshot files {} and {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method markForDelete arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00116] For method markForDelete list of called methods Object monObjet|java.nio.file.Path snapshotPathN165828|java.nio.file.Path deleteRenameN165936"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN165710 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN165710 the MagicNumber/String  'Error renaming snapshot file from %s to %s.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String 'Deleted snapshot files for snapshot {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String 'Did not delete snapshot files for snapshot {} since they did not exist.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String 'Error deleting snapshot files {} and {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN164653 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

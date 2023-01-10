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
 , "c5" : "00051"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#51"
 , "c1" : "Path"
 , "c2" : "snapshotDir(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#55"
 , "c1" : "String"
 , "c2" : "filenameFromSnapshotId(OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#59"
 , "c1" : "Path"
 , "c2" : "moveRename(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#63"
 , "c1" : "Path"
 , "c2" : "deleteRename(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#67"
 , "c1" : "Path"
 , "c2" : "snapshotPath(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c1" : "Path"
 , "c2" : "createTempFile(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#86"
 , "c1" : "Optional<SnapshotPath>"
 , "c2" : "parse(Path)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#115"
 , "c1" : "boolean"
 , "c2" : "deleteIfExists(Path;OffsetAndEpoch)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#135"
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
 , "c1" : "00051"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method snapshotDir arguments Path  logDir"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method filenameFromSnapshotId arguments OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.snapshot.Snapshots.filenameFromSnapshotId@POLYN162657 the MagicNumber/String  '%s-%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method moveRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method deleteRename arguments Path  source|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method snapshotPath arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method createTempFile arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00071] For method createTempFile list of called methods Object monObjet|java.nio.file.Path snapshotDirN163782"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN163660 the MagicNumber/String  '%s-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.snapshot.Snapshots.createTempFile@POLYN163660 the MagicNumber/String  'Error creating temporary file, logDir = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method parse arguments Path  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00086] For method parse list of called methods Object monObjet|java.lang.String filename_toStringN164775|long Long_parseLongN165405|int Integer_parseIntN165562"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.snapshot.Snapshots.parse@POLYN164474 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method deleteIfExists arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00115] For method deleteIfExists list of called methods Object monObjet|java.nio.file.Path snapshotPathN166169|java.nio.file.Path deleteRenameN166277"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String  'Deleted snapshot files for snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String  'Did not delete snapshot files for snapshot {} since they did not exist.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String  'Error deleting snapshot files {} and {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method markForDelete arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00135] For method markForDelete list of called methods Object monObjet|java.nio.file.Path snapshotPathN167222|java.nio.file.Path deleteRenameN167330"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN167104 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.snapshot.Snapshots.markForDelete@POLYN167104 the MagicNumber/String  'Error renaming snapshot file from %s to %s.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String 'Deleted snapshot files for snapshot {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String 'Did not delete snapshot files for snapshot {} since they did not exist.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String 'Error deleting snapshot files {} and {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.snapshot.Snapshots.deleteIfExists@POLYN166047 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/Snapshots.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

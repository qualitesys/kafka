console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/Timer.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.Timer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.Timer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Timer"
 , "c2" : "Timer(Time;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isExpired()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "notExpired()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateAndReset(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reset(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetDeadline(long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "update()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "update(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "remainingMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "currentTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "elapsedMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "timeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "sleep(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class Timer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method updateAndReset arguments long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method reset arguments long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.utils.Timer.reset@POLYN199446 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.utils.Timer.reset@POLYN199446 the MagicNumber/String  'Invalid negative timeout ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method resetDeadline arguments long  deadlineMs"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.utils.Timer.resetDeadline@POLYN200122 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.utils.Timer.resetDeadline@POLYN200122 the MagicNumber/String  'Invalid negative deadline ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.utils.Timer.resetDeadline@POLYN200122 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method update arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.utils.Timer.remainingMs@POLYN201613 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method sleep arguments long  durationMs"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00025] Public method notExpired is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Timer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.Timer.sleep@POLYN202853"
}} 
]
};
console.log('leListeStr 99 main end');

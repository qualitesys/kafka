console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java 130 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.BrokerHeartbeatManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.BrokerHeartbeatManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BrokerHeartbeatManager"
 , "c2" : "BrokerHeartbeatManager(LogContext;Time;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Time"
 , "c2" : "time()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BrokerHeartbeatStateList"
 , "c2" : "unfenced()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<BrokerHeartbeatState>"
 , "c2" : "brokers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "fence(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "untrack(BrokerHeartbeatState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidSession(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidSession(BrokerHeartbeatState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "register(int;boolean)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "touch(int;boolean;long)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "lowestActiveOffset()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateControlledShutdownOffset(int;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "nextCheckTimeNs()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Integer>"
 , "c2" : "findOneStaleBroker()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<UsableBroker>"
 , "c2" : "usableBrokers(Function<Integer,Optional<String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BrokerControlState"
 , "c2" : "currentBrokerState(BrokerHeartbeatState)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "BrokerControlStates"
 , "c2" : "calculateNextBrokerState(int;BrokerHeartbeatRequestData;long;Supplier<Boolean>)"
 , "c3" : "19"
 , "c4" : "26"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.svg" }

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
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "63"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class BrokerHeartbeatManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00029] The class BrokerHeartbeatState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.BrokerHeartbeatState@POLYN239473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.BrokerHeartbeatState@POLYN239473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.BrokerHeartbeatState@POLYN239473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.BrokerHeartbeatState@POLYN239473 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.BrokerHeartbeatState@POLYN239473 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.fenced@POLYN240114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatState.shuttingDown@POLYN240275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00073] The class MetadataOffsetComparator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method compare arguments BrokerHeartbeatState  a|BrokerHeartbeatState  b"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.controller.BrokerHeartbeatManager.MetadataOffsetComparator.compare@POLYN240559 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.controller.BrokerHeartbeatManager.MetadataOffsetComparator.compare@POLYN240559 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.controller.BrokerHeartbeatManager.MetadataOffsetComparator.compare@POLYN240559 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.BrokerHeartbeatManager.MetadataOffsetComparator.compare@POLYN240559 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.controller.BrokerHeartbeatManager.MetadataOffsetComparator.compare@POLYN240559 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00092] The class BrokerHeartbeatStateList contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.BrokerHeartbeatStateList@POLYN241375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.first@POLYN241721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method add arguments BrokerHeartbeatState  broker"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.add@POLYN242020 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method remove arguments BrokerHeartbeatState  broker"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.remove@POLYN242710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.remove@POLYN242710 the MagicNumber/String  ' is not in the  list.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.remove@POLYN242710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.controller.BrokerHeartbeatManager.BrokerHeartbeatStateList.remove@POLYN242710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00139] The class BrokerHeartbeatStateIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00181] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method fence arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.controller.BrokerHeartbeatManager.fence@POLYN245779 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method remove arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method untrack arguments BrokerHeartbeatState  broker"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#224"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00224] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method hasValidSession arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.controller.BrokerHeartbeatManager.hasValidSession@POLYN247081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.controller.BrokerHeartbeatManager.hasValidSession@POLYN247081 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method hasValidSession arguments BrokerHeartbeatState  broker"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#241"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00241] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.controller.BrokerHeartbeatManager.hasValidSession@POLYN247541 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method register arguments int  brokerId|boolean  fenced"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.controller.BrokerHeartbeatManager.register@POLYN247989 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.controller.BrokerHeartbeatManager.register@POLYN247989 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method touch arguments int  brokerId|boolean  fenced|long  metadataOffset"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.controller.BrokerHeartbeatManager.touch@POLYN248721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.controller.BrokerHeartbeatManager.touch@POLYN248721 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00295] For method updateControlledShutdownOffset arguments int  brokerId|long  controlledShutDownOffset"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String  'Unable to locate broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String  'Fenced brokers cannot enter controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String  'Updated the controlled shutdown offset for broker {} to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.controller.BrokerHeartbeatManager.nextCheckTimeNs@POLYN251127 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method usableBrokers arguments Function&lt;Integer ,Optional&lt;String &gt; &gt;  idToRack"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00340] The class UsableBrokerIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.UsableBrokerIterator@POLYN252634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.hasNext@POLYN253017 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.hasNext@POLYN253017 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.hasNext@POLYN253017 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.hasNext@POLYN253017 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.controller.BrokerHeartbeatManager.UsableBrokerIterator.next@POLYN253838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#380"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00380] For method currentBrokerState arguments BrokerHeartbeatState  broker"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#380"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00380] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#391"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00391] For method calculateNextBrokerState arguments int  brokerId|BrokerHeartbeatRequestData  request|long  lastCommittedOffset|Supplier&lt;Boolean &gt;  hasLeaderships"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#391"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00391] For method calculateNextBrokerState list of called methods Object monObjet|org.apache.kafka.controller.BrokerControlState currentBrokerStateN255109"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#392"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00392] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#394"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00394] The argument hasLeaderships is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Fenced broker {} has requested and been granted an immediate ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'The request from broker {} to unfence has been granted ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'because it has caught up with the last committed metadata ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'The request from broker {} to unfence cannot yet ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'be granted because it has not caught up with the last ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'committed metadata offset {}. It is still at offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Unfenced broker {} has requested and been granted an ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'immediate shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Unfenced broker {} has requested and been granted ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'fencing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Unfenced broker {} has requested and been granted a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Unfenced broker {} has requested and been granted an ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'immediate shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'Broker {} is in controlled shutdown state, but can not ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'shut down because more leaders still need to be moved.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'The request from broker {} to shut down has been granted ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'since the lowest active offset {} is now greater than the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'broker's controlled shutdown offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'The request from broker {} to shut down can not yet be granted ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'because the lowest active offset {} is not greater than the broker's ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String  'shutdown offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147 ending with method org.apache.kafka.controller.BrokerHeartbeatManager.untrack@POLYN246574"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.controller.BrokerHeartbeatManager.untrack@POLYN246574"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.controller.BrokerHeartbeatManager.untrack@POLYN246574 ending with method org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.controller.BrokerHeartbeatManager.untrack@POLYN246574"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00218] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.remove@POLYN246147 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String 'Unable to locate broker ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String 'Fenced brokers cannot enter controlled shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00305] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.updateControlledShutdownOffset@POLYN250290 the MagicNumber/String 'Updated the controlled shutdown offset for broker {} to {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00401] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Fenced broker {} has requested and been granted an immediate ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00406] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'The request from broker {} to unfence has been granted ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00407] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'because it has caught up with the last committed metadata ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00408] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00412] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'The request from broker {} to unfence cannot yet ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00413] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'be granted because it has not caught up with the last ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00414] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'committed metadata offset {}. It is still at offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00425] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Unfenced broker {} has requested and been granted an ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00426] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'immediate shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00429] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Unfenced broker {} has requested and been granted ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00430] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'fencing' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00435] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Unfenced broker {} has requested and been granted a ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'controlled shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00439] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Unfenced broker {} has requested and been granted an ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'immediate shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'Broker {} is in controlled shutdown state, but can not ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'shut down because more leaders still need to be moved.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'The request from broker {} to shut down has been granted ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00455] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'since the lowest active offset {} is now greater than the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'broker's controlled shutdown offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'The request from broker {} to shut down can not yet be granted ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00461] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'because the lowest active offset {} is not greater than the broker's ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/BrokerHeartbeatManager.java.html#462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00462] In the recursive method org.apache.kafka.controller.BrokerHeartbeatManager.calculateNextBrokerState@POLYN254762 the MagicNumber/String 'shutdown offset {}.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');

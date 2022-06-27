console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/RequestManager.java 36 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.RequestManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.RequestManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RequestManager"
 , "c2" : "RequestManager(Set<Integer>;int;int;Random)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ConnectionState"
 , "c2" : "getOrCreate(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OptionalInt"
 , "c2" : "findReadyVoter(long)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "backoffBeforeAvailableVoter(long)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetAll()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
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
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class RequestManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00032] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method getOrCreate arguments int  id"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method findReadyVoter arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.raft.RequestManager.findReadyVoter@POLYN181894 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method backoffBeforeAvailableVoter arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.raft.RequestManager.backoffBeforeAvailableVoter@POLYN183108 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00086] The class ConnectionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method isBackoffComplete arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method hasRequestTimedOut arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method isReady arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method isBackingOff arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.raft.RequestManager.ConnectionState.isBackingOff@POLYN185537 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method hasInflightRequest arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.raft.RequestManager.ConnectionState.hasInflightRequest@POLYN185816 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method remainingRequestTimeMs arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.raft.RequestManager.ConnectionState.remainingRequestTimeMs@POLYN186095 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method remainingBackoffMs arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.raft.RequestManager.ConnectionState.remainingBackoffMs@POLYN186379 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method isResponseExpected arguments long  correlationId"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method onResponseError arguments long  correlationId|long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method onResponseReceived arguments long  correlationId"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method onRequestSent arguments long  correlationId|long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  'ConnectionState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  'id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  ', state=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  ', lastSendTimeMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  ', lastFailTimeMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  ', inFlightCorrelationId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN188270 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00037] Public method getOrCreate is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00060] Public method backoffBeforeAvailableVoter is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00075] Public method resetAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

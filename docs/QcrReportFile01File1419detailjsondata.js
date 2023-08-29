console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/RequestManager.java 35 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.RequestManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.RequestManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#36"
 , "c1" : "RequestManager"
 , "c2" : "RequestManager(Set&lt;Integer&gt;;int;int;Random)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#52"
 , "c1" : "ConnectionState"
 , "c2" : "getOrCreate(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#56"
 , "c1" : "OptionalInt"
 , "c2" : "findReadyVoter(long)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#75"
 , "c1" : "long"
 , "c2" : "backoffBeforeAvailableVoter(long)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#90"
 , "c1" : "void"
 , "c2" : "resetAll()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method getOrCreate arguments int  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method findReadyVoter arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method findReadyVoter list of called methods Object monObjet|boolean connection_isReadyN178210"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00061] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.raft.RequestManager.findReadyVoter@POLYN177402 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method backoffBeforeAvailableVoter arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.raft.RequestManager.backoffBeforeAvailableVoter@POLYN178628 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method isBackoffComplete arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method hasRequestTimedOut arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method isReady arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method isBackingOff arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.raft.RequestManager.ConnectionState.isBackingOff@POLYN181061 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method hasInflightRequest arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.raft.RequestManager.ConnectionState.hasInflightRequest@POLYN181340 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method remainingRequestTimeMs arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.raft.RequestManager.ConnectionState.remainingRequestTimeMs@POLYN181619 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method remainingBackoffMs arguments long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.raft.RequestManager.ConnectionState.remainingBackoffMs@POLYN181903 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method isResponseExpected arguments long  correlationId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method onResponseError arguments long  correlationId|long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method onResponseReceived arguments long  correlationId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method onRequestSent arguments long  correlationId|long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  'ConnectionState(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  'id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  ', state=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  ', lastSendTimeMs=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  ', lastFailTimeMs=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  ', inFlightCorrelationId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.raft.RequestManager.ConnectionState.toString@POLYN183794 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00052] Public method getOrCreate is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00075] Public method backoffBeforeAvailableVoter is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00090] Public method resetAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/RequestManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');

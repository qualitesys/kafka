console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java 86 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
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
 , "c4" : "47"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "31"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class ClusterConnectionStates contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method canConnect arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.ClusterConnectionStates.canConnect@POLYN238465 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.ClusterConnectionStates.canConnect@POLYN238465 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method isBlackedOut arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.ClusterConnectionStates.isBlackedOut@POLYN239033 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method connectionDelay arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.clients.ClusterConnectionStates.connectionDelay@POLYN239676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.clients.ClusterConnectionStates.connectionDelay@POLYN239676 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.ClusterConnectionStates.connectionDelay@POLYN239676 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method isConnecting arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.ClusterConnectionStates.isConnecting@POLYN240551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method isPreparingConnection arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.ClusterConnectionStates.isPreparingConnection@POLYN241001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method connecting arguments String  id|long  now|String  host"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.ClusterConnectionStates.connecting@POLYN241546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.ClusterConnectionStates.connecting@POLYN241546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.ClusterConnectionStates.connecting@POLYN241546 the MagicNumber/String  'Hostname for node {} changed from {} to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.ClusterConnectionStates.connecting@POLYN241546 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.ClusterConnectionStates.connecting@POLYN241546 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method currentAddress arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method disconnected arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method throttle arguments String  id|long  throttleUntilTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.clients.ClusterConnectionStates.throttle@POLYN244136 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method throttleDelayMs arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.clients.ClusterConnectionStates.throttleDelayMs@POLYN244647 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.clients.ClusterConnectionStates.throttleDelayMs@POLYN244647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method pollDelayMs arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.ClusterConnectionStates.pollDelayMs@POLYN245307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method checkingApiVersions arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method ready arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.clients.ClusterConnectionStates.ready@POLYN246269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00193] For method authenticationFailed arguments String  id|long  now|AuthenticationException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method isReady arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method isReady arguments NodeConnectionState  state|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.clients.ClusterConnectionStates.isReady@POLYN247691 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method hasReadyNodes arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.ClusterConnectionStates.hasReadyNodes@POLYN248091 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.clients.ClusterConnectionStates.hasReadyNodes@POLYN248091 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method isConnected arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.clients.ClusterConnectionStates.isConnected@POLYN248583 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00227] For method isDisconnected arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.clients.ClusterConnectionStates.isDisconnected@POLYN248939 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method authenticationException arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.clients.ClusterConnectionStates.authenticationException@POLYN249295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.clients.ClusterConnectionStates.authenticationException@POLYN249295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#239"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00239] For method resetReconnectBackoff arguments NodeConnectionState  nodeState"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#239"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00239] The argument nodeState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.clients.ClusterConnectionStates.resetReconnectBackoff@POLYN249701 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.clients.ClusterConnectionStates.resetReconnectBackoff@POLYN249701 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#245"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00245] For method resetConnectionSetupTimeout arguments NodeConnectionState  nodeState"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#245"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00245] The argument nodeState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.clients.ClusterConnectionStates.resetConnectionSetupTimeout@POLYN250080 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.ClusterConnectionStates.resetConnectionSetupTimeout@POLYN250080 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#251"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00251] For method updateReconnectBackoff arguments NodeConnectionState  nodeState"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#251"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00251] The argument nodeState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00257] For method updateConnectionSetupTimeout arguments NodeConnectionState  nodeState"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#257"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00257] The argument nodeState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00263] For method remove arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00269] For method connectionState arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method nodeState arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.clients.ClusterConnectionStates.nodeState@POLYN252015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.clients.ClusterConnectionStates.nodeState@POLYN252015 the MagicNumber/String  'No entry found for connection ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00288] For method lastConnectAttemptMs arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.clients.ClusterConnectionStates.lastConnectAttemptMs@POLYN252637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.clients.ClusterConnectionStates.lastConnectAttemptMs@POLYN252637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00294] For method connectionSetupTimeoutMs arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00300] For method isConnectionSetupTimeout arguments String  id|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.clients.ClusterConnectionStates.isConnectionSetupTimeout@POLYN253397 the MagicNumber/String  'Node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.clients.ClusterConnectionStates.isConnectionSetupTimeout@POLYN253397 the MagicNumber/String  ' is not in connecting state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#308"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00308] For method nodesWithConnectionSetupTimeout arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00315] The class NodeConnectionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.NodeConnectionState@POLYN254865 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.NodeConnectionState@POLYN254865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.NodeConnectionState@POLYN254865 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.NodeConnectionState@POLYN254865 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.currentAddress@POLYN256037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.moveToNextAddress@POLYN256543 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.moveToNextAddress@POLYN256543 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.toString@POLYN257138 the MagicNumber/String  'NodeState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.toString@POLYN257138 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.toString@POLYN257138 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.toString@POLYN257138 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.ClusterConnectionStates.NodeConnectionState.toString@POLYN257138 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ClusterConnectionStates.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00165] Public method pollDelayMs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');

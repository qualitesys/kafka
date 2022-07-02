console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/RaftConfig.java 65 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.RaftConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.RaftConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RaftConfig"
 , "c2" : "RaftConfig(AbstractConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RaftConfig"
 , "c2" : "RaftConfig(Map<Integer,AddressSpec>;int;int;int;int;int;int)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "requestTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "retryBackoffMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "electionTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "electionBackoffMaxMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "fetchTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "appendLingerMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<Integer>"
 , "c2" : "quorumVoterIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,AddressSpec>"
 , "c2" : "quorumVoterConnections()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "parseVoterId(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,AddressSpec>"
 , "c2" : "parseVoterConnections(List<String>)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "List<Node>"
 , "c2" : "quorumVoterStringsToNodes(List<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Node>"
 , "c2" : "voterConnectionsToNodes(Map<Integer,RaftConfig.AddressSpec>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "15"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
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
   "c1" : "00021"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class RaftConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00077] The class InetAddressSpec contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.raft.RaftConfig.InetAddressSpec.InetAddressSpec@POLYN199038 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.raft.RaftConfig.InetAddressSpec.InetAddressSpec@POLYN199038 the MagicNumber/String  'Invalid address: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00098] The same method call obj.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.raft.RaftConfig.InetAddressSpec.equals@POLYN199539 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.raft.RaftConfig.InetAddressSpec.equals@POLYN199539 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.raft.RaftConfig.InetAddressSpec.equals@POLYN199539 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00107] The class UnknownAddressSpec contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument abstractConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method parseVoterId arguments String  idString"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN202193 the MagicNumber/String  'Failed to parse voter ID as an integer from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method parseVoterConnections arguments List&lt;String &gt;  voterEntries"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00180] For method parseVoterConnections list of called methods Object monObjet|java.util.Map&lt;Integer,org.apache.kafka.raft.RaftConfig.AddressSpec&gt; parseVoterIdN203163|String Utils_getHostN203280|Integer Utils_getPortN203646"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00183] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00190] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  '@' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  'Invalid configuration value for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  '. Each entry should be in the form `{id}@{host}:{port}`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  'Failed to parse host name from entry ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  ' for the configuration ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  '. Each entry should be in the form `{id}@{host}:{port}`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  'Failed to parse host port from entry ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  ' for the configuration ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String  '. Each entry should be in the form `{id}@{host}:{port}`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method quorumVoterStringsToNodes arguments List&lt;String &gt;  voters"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method voterConnectionsToNodes arguments Map&lt;Integer ,RaftConfig.AddressSpec &gt;  voterConnections"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument voterConnections is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00230] The class ControllerQuorumVotersValidator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.raft.RaftConfig.ControllerQuorumVotersValidator.ensureValid@POLYN205528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.raft.RaftConfig.ControllerQuorumVotersValidator.ensureValid@POLYN205528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.raft.RaftConfig.ControllerQuorumVotersValidator.ensureValid@POLYN205528 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.raft.RaftConfig.ControllerQuorumVotersValidator.toString@POLYN206012 the MagicNumber/String  'non-empty list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00164] Public method quorumVoterIds is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00180] Public method parseVoterConnections is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00215] Public method quorumVoterStringsToNodes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.RaftConfig.quorumVoterIds@POLYN201947"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.RaftConfig.quorumVoterStringsToNodes@POLYN204501"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String '@' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 'Invalid configuration value for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String '. Each entry should be in the form `{id}@{host}:{port}`.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 'Failed to parse host name from entry ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00193] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String ' for the configuration ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00194] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String '. Each entry should be in the form `{id}@{host}:{port}`.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00199] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String 'Failed to parse host port from entry ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00200] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String ' for the configuration ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftConfig.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN202545 the MagicNumber/String '. Each entry should be in the form `{id}@{host}:{port}`.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
